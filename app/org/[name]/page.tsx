"use client"

import Nav from "@/app/components/Nav";
import { Button } from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import * as React from 'react'

const OrgLandingPage = () => {

  const [blogContent,setBlogContent] = React.useState('');
  const [blogTitle,setBlogTitle] = React.useState('');

  return (
    <div>
      <Nav></Nav>
      <div className="p-10 ">
        <Input placeholder="Title" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} className="mb-2"/>
        <Textarea placeholder="Enter your Blog" onChange={(e) => setBlogContent(e.target.value) }/>
        <Button className="bg-black text-white mt-2">Create a Blog</Button>
      </div>
    </div>
  )
}

export default OrgLandingPage;