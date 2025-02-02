import { lazy } from "react";

const Navbar = lazy(() => import("./block/Navbar.jsx"));
const Footer = lazy(() => import("./block/Footer.jsx"));
const FeaturesCard = lazy(() => import("./ui/cards/FeatureCard.jsx"));
const StepCard = lazy(() => import("./ui/cards/StepCard.jsx"));
const GuildCard = lazy(() => import("./ui/cards/GuildCard.jsx"));
const LazyImage = lazy(() => import("./element/LazyImage.jsx"));

export { Navbar, Footer, FeaturesCard, StepCard, GuildCard, LazyImage };