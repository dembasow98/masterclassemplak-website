import React from "react";
import Design from "../components/design/Design";
import excited from "../assets/images/error/excited.gif";

const News = () => {
    return (
        <div class="w-full">
            <div class="w-full -z-10">
                <img src={excited} alt="under construction" class="w-full object-cover" />
            </div>
            <Design />
        </div>

    );
};

export default News;