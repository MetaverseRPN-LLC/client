import type { APIUser } from "@spacebarchat/spacebar-api-types/v9";
import { action, computed, makeAutoObservable, observable } from "mobx";
import secureLocalStorage from "react-secure-storage";
import REST from "../utils/REST";
import AccountStore from "./AccountStore";
import ExperimentsStore from "./ExperimentsStore";
import GatewayConnectionStore from "./GatewayConnectionStore";
import GuildStore from "./GuildStore";
import MessageQueue from "./MessageQueue";
import PresenceStore from "./PresenceStore";
import PrivateChannelStore from "./PrivateChannelStore";
import ThemeStore from "./ThemeStore";
import UserStore from "./UserStore";

export default class AppStore {
	// whether the gateway is ready
	@observable isGatewayReady = false;
	// whether the app is still loading
	@observable isAppLoading = true;

	@observable isNetworkConnected = true; // TODO: Implement this
	@observable tokenLoaded = false;
	@observable token: string | null = null;

	// stores
	@observable theme: ThemeStore = new ThemeStore();
	@observable account: AccountStore | null = null;
	@observable gateway = new GatewayConnectionStore(this);
	@observable guilds = new GuildStore(this);
	@observable users = new UserStore();
	@observable privateChannels = new PrivateChannelStore(this);
	@observable rest = new REST(this);
	@observable experiments = new ExperimentsStore();
	@observable presences = new PresenceStore(this);
	@observable queue = new MessageQueue();

	constructor() {
		makeAutoObservable(this);
	}

	@action
	setGatewayReady(value: boolean) {
		this.isGatewayReady = value;
	}

	@action
	setAppLoading(value: boolean) {
		this.isAppLoading = value;
	}

	@action
	setToken(token: string) {
		this.token = token;
		secureLocalStorage.setItem("token", token);
		this.tokenLoaded = true;
		console.log("Token saved to storage");
	}

	@action
	setUser(user: APIUser) {
		this.account = new AccountStore(user);
	}

	@action
	loadToken() {
		const token = secureLocalStorage.getItem("token") as string | null;

		this.tokenLoaded = true;

		if (token) {
			console.debug("Loaded token from storage.");
			this.setToken(token);
		} else {
			console.debug("No token found in storage.");
			this.setGatewayReady(true);
		}
	}

	@action
	logout() {
		this.token = null;
		this.tokenLoaded = false;
		secureLocalStorage.removeItem("token");
	}

	@computed
	/**
	 * Whether the app is done loading and ready to be displayed
	 */
	get isReady() {
		return (
			!this.isAppLoading && this.isGatewayReady && this.isNetworkConnected
		);
	}
}

export const appStore = new AppStore();

export function useAppStore() {
	return appStore;
}