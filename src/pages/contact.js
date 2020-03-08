import React from "react"

import 'bulma/css/bulma.css'
// import styled from "@emotion/styled"

import Layout from  "../components/layout"
import PageTitle from  "../components/pagetitle"
import Container from  "../components/container"
import ContactBlock from  "../components/contactblock"

export default () => (
  <Layout>
    <PageTitle>Contact</PageTitle>
    <div className="columns is-multiline is-centered">
      <ContactBlock title="Electronic-mail" text="anthonywbaker1[at]gmail.com" slug=""/>
      <ContactBlock title="LinkedIn" text="awbaker1" slug="https://www.linkedin.com/in/awbaker1/"/>
      <ContactBlock title="Github" text="bakera81" slug="https://github.com/bakera81"/>
    </div>
  </Layout>
)
