import React from "react";
import { HStack, Tooltip } from "native-base";
import { Image, Pressable } from "react-native";
import FosscordLogo from "../assets/images/icon_round_256_blue.png";
import { FaCogs, FaSingOutAlt, FaUserCircle, FaUsers } from "../assets/images/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DevSettings from "./DevSettings";

export default function () {
	return (
		<HStack
			w="100%"
			style={{
				justifyContent: "space-around",
				borderTopColor: "grey",
				borderTopWidth: 1,
			}}
			p={1}
		>
			{/* Home */}
			<Tooltip label={"Home"} placement={"top"}>
				<Pressable>
					<Image
						style={{
							width: 40,
							height: 40,
						}}
						source={FosscordLogo}
						mx={1}
					/>
				</Pressable>
			</Tooltip>
			{/* Friends */}
			<Tooltip label={"Friends"} placement={"top"}>
				<Pressable>
					<FaUsers
						style={{
							width: 40,
							height: 40,
						}}
						mx={1}
					/>
				</Pressable>
			</Tooltip>
			{/* Profile */}
			<Tooltip label={"Profile"} placement={"top"}>
				<Pressable>
					<FaUserCircle
						style={{
							width: 40,
							height: 40,
						}}
						mx={1}
					/>
				</Pressable>
			</Tooltip>
			{/* Settings */}
			<Tooltip label={"Settings"} placement={"top"}>
				<Pressable>
					<FaCogs
						style={{
							width: 40,
							height: 40,
						}}
						mx={1}
					/>
				</Pressable>
			</Tooltip>
			{/* Logout */}
			<Tooltip label={"Logout"} placement={"top"}>
				<Pressable
					onPress={() => {
						AsyncStorage.removeItem("accessToken");
						DevSettings.reload();
					}}
				>
					<FaSingOutAlt
						style={{
							width: 40,
							height: 40,
						}}
						mx={1}
					/>
				</Pressable>
			</Tooltip>
		</HStack>
	);
}