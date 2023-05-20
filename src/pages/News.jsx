import React from "react";
import Design from "../components/design/Design";
import underdev from "../assets/images/error/underdev.gif";

const News = () => {
    return (
        <div class="w-full">
            <div class="w-full my-48 lg:my-10">
                <img src={underdev} alt="under construction" class="w-full object-cover" />
            </div>
            <Design />
        </div>

    );
};

export default News;