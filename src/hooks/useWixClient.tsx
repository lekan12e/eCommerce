/** @format */

import { WixContext } from "@/context/wixContext";
import React from "react";

const useWixClient = () => {
	return React.useContext(WixContext);
};

export default useWixClient;
