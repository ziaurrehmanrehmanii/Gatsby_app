import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Seo from "../components/SEO/SEO"
import CTAArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Quot from "../components/Quote/Quot";
import About from "../components/About/About";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
      <Quot/>
      <About/>
  </Layout>
)

export default IndexPage
