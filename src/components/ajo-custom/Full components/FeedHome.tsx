import React from "react";
import HomeTabs from "../home-tabs";
import TextInput from "../text-input";
import ComposeBox from "../compose-box";
"use client";
import { useEffect } from "react";
import ComposeBox from "../compose-box";
import TextInput from "../text-input";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const FeedHome = () => {
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: any) => {
    console.log(to);
  };

  return (
    <div>
      <HomeTabs />
    <div
      style={{  
      }}
      className="w-full relative overflow-hidden flex flex-col flex-nowrap justify-cente "
    >
      <TextInput />
      <ComposeBox /> 

    </div>
  );
};
  );
};

export default FeedHome;

