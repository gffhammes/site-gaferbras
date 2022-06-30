import { Box, Container } from '@mui/material'
import React from 'react'
import NProgress from "nprogress"
import Router from "next/router";
import { useEffect } from 'react'
// import "nprogress/nprogress.css";

interface IProps { }

export const ProgressBar = (props: IProps) => {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return null
}