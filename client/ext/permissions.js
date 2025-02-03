/**
 * code logic copied from:
 * - https://github.com/Rapptz/discord.py/blob/45d498c1b76deaf3b394d17ccf56112fa691d160/discord/permissions.py
 * - https://github.com/Rapptz/discord.py/blob/45d498c1b76deaf3b394d17ccf56112fa691d160/discord/flags.py
 *
 * The MIT License (MIT)
 * Copyright (c) 2015-present Rapptz
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

class FlagValue {
  constructor(func) {
    this.flag = func(null);
    this.__doc__ = func.__doc__;
  }

  get(instance, owner) {
    if (instance === null) {
      return this;
    }
    return instance._hasFlag(this.flag);
  }

  set(instance, value) {
    instance._setFlag(this.flag, value);
  }

  toString() {
    return `<FlagValue flag=${this.flag}>`;
  }
}

function fillWithFlags(targetClass) {
  // Add your flag filling logic here
  return targetClass;
}

class BaseFlags {
  constructor(kwargs = {}) {
    this.value = this.constructor.DEFAULT_VALUE;
    for (const [key, value] of Object.entries(kwargs)) {
      if (!(key in this.constructor.VALID_FLAGS)) {
        throw new TypeError(`${key} is not a valid flag name.`);
      }
      this[key] = value;
    }
  }

  static _fromValue(value) {
    const self = new this();
    self.value = value;
    return self;
  }

  equals(other) {
    return other instanceof this.constructor && this.value === other.value;
  }

  notEquals(other) {
    return !this.equals(other);
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `<${this.constructor.name} value=${this.value}>`;
  }

  *[Symbol.iterator]() {
    for (const [name, value] of Object.entries(this.constructor.prototype)) {
      if (value instanceof AliasFlagValue) {
        continue;
      }

      if (value instanceof FlagValue) {
        yield [name, this._hasFlag(value.flag)];
      }
    }
  }

  _hasFlag(flag) {
    return (this.value & flag) === flag;
  }

  _setFlag(flag, toggle) {
    if (toggle === true) {
      this.value |= flag;
    } else if (toggle === false) {
      this.value &= ~flag;
    } else {
      throw new TypeError(`Value to set for ${this.constructor.name} must be a boolean.`);
    }
  }
}

class AliasFlagValue extends FlagValue {}

class PermissionAlias extends AliasFlagValue {}

function makePermissionAlias(alias) {
  return function decorator(func) {
    const ret = new PermissionAlias(func);
    ret.alias = alias;
    return ret;
  };
}

const Permissions = fillWithFlags(class Permissions extends BaseFlags {
  constructor(permissions = 0, kwargs = {}) {
    if (typeof permissions !== 'number') {
      throw new TypeError(`Expected number parameter, received ${typeof permissions} instead.`);
    }

    super();
    this.value = permissions;
    
    for (const [key, value] of Object.entries(kwargs)) {
      if (!(key in this.constructor.VALID_FLAGS)) {
        throw new TypeError(`${key} is not a valid permission name.`);
      }
      this[key] = value;
    }
  }

  isSubset(other) {
    if (other instanceof Permissions) {
      return (this.value & other.value) === this.value;
    }
    throw new TypeError(`Cannot compare ${this.constructor.name} with ${other.constructor.name}`);
  }

  isSuperset(other) {
    if (other instanceof Permissions) {
      return (this.value | other.value) === this.value;
    }
    throw new TypeError(`Cannot compare ${this.constructor.name} with ${other.constructor.name}`);
  }

  isStrictSubset(other) {
    return this.isSubset(other) && !this.equals(other);
  }

  isStrictSuperset(other) {
    return this.isSuperset(other) && !this.equals(other);
  }

  static none() {
    return new this(0);
  }

  static all() {
    return new this(0b111111111111111111111111111111111);
  }

  static allChannel() {
    return new this(0b10110011111101111111111101010001);
  }

  static general() {
    return new this(0b01110000000010000000010010110000);
  }

  static membership() {
    return new this(0b00001100000000000000000000000111);
  }

  static text() {
    return new this(0b10000000000001111111100001000000);
  }

  static voice() {
    return new this(0b00000011111100000000001100000000);
  }

  static stage() {
    return new this(1 << 32);
  }

  static stageModerator() {
    return new this(0b100000001010000000000000000000000);
  }

  static advanced() {
    return new this(1 << 3);
  }

  update(kwargs = {}) {
    for (const [key, value] of Object.entries(kwargs)) {
      if (key in this.constructor.VALID_FLAGS) {
        this[key] = value;
      }
    }
  }

  handleOverwrite(allow, deny) {
    this.value = (this.value & ~deny) | allow;
  }

  // Permission flag getters/setters
  get createInstantInvite() { return this._hasFlag(1 << 0); }
  set createInstantInvite(value) { this._setFlag(1 << 0, value); }

  get kickMembers() { return this._hasFlag(1 << 1); }
  set kickMembers(value) { this._setFlag(1 << 1, value); }

  get banMembers() { return this._hasFlag(1 << 2); }
  set banMembers(value) { this._setFlag(1 << 2, value); }

  get administrator() { return this._hasFlag(1 << 3); }
  set administrator(value) { this._setFlag(1 << 3, value); }

  get manageChannels() { return this._hasFlag(1 << 4); }
  set manageChannels(value) { this._setFlag(1 << 4, value); }

  get manageGuild() { return this._hasFlag(1 << 5); }
  set manageGuild(value) { this._setFlag(1 << 5, value); }

  get addReactions() { return this._hasFlag(1 << 6); }
  set addReactions(value) { this._setFlag(1 << 6, value); }

  get viewAuditLog() { return this._hasFlag(1 << 7); }
  set viewAuditLog(value) { this._setFlag(1 << 7, value); }

  get prioritySpeaker() { return this._hasFlag(1 << 8); }
  set prioritySpeaker(value) { this._setFlag(1 << 8, value); }

  get stream() { return this._hasFlag(1 << 9); }
  set stream(value) { this._setFlag(1 << 9, value); }

  get readMessages() { return this._hasFlag(1 << 10); }
  set readMessages(value) { this._setFlag(1 << 10, value); }

  get viewChannel() { return this.readMessages; }
  set viewChannel(value) { this.readMessages = value; }

  get sendMessages() { return this._hasFlag(1 << 11); }
  set sendMessages(value) { this._setFlag(1 << 11, value); }

  get sendTTSMessages() { return this._hasFlag(1 << 12); }
  set sendTTSMessages(value) { this._setFlag(1 << 12, value); }

  get manageMessages() { return this._hasFlag(1 << 13); }
  set manageMessages(value) { this._setFlag(1 << 13, value); }

  get embedLinks() { return this._hasFlag(1 << 14); }
  set embedLinks(value) { this._setFlag(1 << 14, value); }

  get attachFiles() { return this._hasFlag(1 << 15); }
  set attachFiles(value) { this._setFlag(1 << 15, value); }

  get readMessageHistory() { return this._hasFlag(1 << 16); }
  set readMessageHistory(value) { this._setFlag(1 << 16, value); }

  get mentionEveryone() { return this._hasFlag(1 << 17); }
  set mentionEveryone(value) { this._setFlag(1 << 17, value); }

  get externalEmojis() { return this._hasFlag(1 << 18); }
  set externalEmojis(value) { this._setFlag(1 << 18, value); }

  get useExternalEmojis() { return this.externalEmojis; }
  set useExternalEmojis(value) { this.externalEmojis = value; }

  get viewGuildInsights() { return this._hasFlag(1 << 19); }
  set viewGuildInsights(value) { this._setFlag(1 << 19, value); }

  get connect() { return this._hasFlag(1 << 20); }
  set connect(value) { this._setFlag(1 << 20, value); }

  get speak() { return this._hasFlag(1 << 21); }
  set speak(value) { this._setFlag(1 << 21, value); }

  get muteMembers() { return this._hasFlag(1 << 22); }
  set muteMembers(value) { this._setFlag(1 << 22, value); }

  get deafenMembers() { return this._hasFlag(1 << 23); }
  set deafenMembers(value) { this._setFlag(1 << 23, value); }

  get moveMembers() { return this._hasFlag(1 << 24); }
  set moveMembers(value) { this._setFlag(1 << 24, value); }

  get useVoiceActivation() { return this._hasFlag(1 << 25); }
  set useVoiceActivation(value) { this._setFlag(1 << 25, value); }

  get changeNickname() { return this._hasFlag(1 << 26); }
  set changeNickname(value) { this._setFlag(1 << 26, value); }

  get manageNicknames() { return this._hasFlag(1 << 27); }
  set manageNicknames(value) { this._setFlag(1 << 27, value); }

  get manageRoles() { return this._hasFlag(1 << 28); }
  set manageRoles(value) { this._setFlag(1 << 28, value); }

  get managePermissions() { return this.manageRoles; }
  set managePermissions(value) { this.manageRoles = value; }

  get manageWebhooks() { return this._hasFlag(1 << 29); }
  set manageWebhooks(value) { this._setFlag(1 << 29, value); }

  get manageEmojis() { return this._hasFlag(1 << 30); }
  set manageEmojis(value) { this._setFlag(1 << 30, value); }

  get useSlashCommands() { return this._hasFlag(1 << 31); }
  set useSlashCommands(value) { this._setFlag(1 << 31, value); }

  get requestToSpeak() { return this._hasFlag(1 << 32); }
  set requestToSpeak(value) { this._setFlag(1 << 32, value); }
});






export default Permissions;

