import React from "react";
import { Spinner } from "../components/common";



const News = () => {
    return (
        <div class=" w-full bg-black ">
            <div class="w-full py-48 lg:py-10">
                <img src = "https://media.giphy.com/media/ife1KAKHhExUUSlzs8/giphy.gif" alt="news" class="w-full h-96 object-cover object-center" />
            </div>
            <div class="pb-20">
                <Spinner />
            </div>
        </div>
    );
};

export default News;