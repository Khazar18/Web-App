import React from "react";
import { UserHeader } from "../../components/userHeader/userHeader.jsx";
import { CreatePostMainContent } from "./Components/CreatePostMainContent/createPostMainContent.jsx";

import Layout from "../../components/layout/layout.jsx";

export default function CreatePost() {
    return (
        <Layout>
            <UserHeader />
            <CreatePostMainContent />
        </Layout>
    );
}