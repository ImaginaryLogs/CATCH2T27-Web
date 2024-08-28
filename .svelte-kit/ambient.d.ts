
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const XDG_ACTIVATION_TOKEN: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const GIO_MODULE_DIR: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const LESS: string;
	export const HOME: string;
	export const TERMINFO: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const OLDPWD: string;
	export const CHROME_DESKTOP: string;
	export const DESKTOP_SESSION: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const GTK_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_json: string;
	export const LSCOLORS: string;
	export const ZSH: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const PAGER: string;
	export const NODE_OPTIONS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const KITTY_PID: string;
	export const MANAGERPID: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const P9K_TTY: string;
	export const SYSTEMD_EXEC_PID: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLOR: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const WINDOWID: string;
	export const _P9K_SSH_TTY: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const USER_ZDOTDIR: string;
	export const KITTY_PUBLIC_KEY: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const INVOCATION_ID: string;
	export const GTK_EXE_PREFIX: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LOCPATH: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const VSCODE_INJECTION: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const NO_AT_BRIDGE: string;
	export const KITTY_WINDOW_ID: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const GPG_AGENT_INFO: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const P9K_SSH: string;
	export const QT_IM_MODULE: string;
	export const VSCODE_INSPECTOR_OPTIONS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_NONCE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const _P9K_TTY: string;
	export const CLUTTER_IM_MODULE: string;
	export const XDG_DATA_DIRS: string;
	export const ZDOTDIR: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const LOCAL_GIT_DIRECTORY: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		XDG_ACTIVATION_TOKEN: string;
		LANGUAGE: string;
		USER: string;
		npm_config_user_agent: string;
		GIO_MODULE_DIR: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		SHLVL: string;
		npm_config_noproxy: string;
		LESS: string;
		HOME: string;
		TERMINFO: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		OLDPWD: string;
		CHROME_DESKTOP: string;
		DESKTOP_SESSION: string;
		KITTY_INSTALLATION_DIR: string;
		GTK_PATH: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_json: string;
		LSCOLORS: string;
		ZSH: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GTK_IM_MODULE_FILE: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		PAGER: string;
		NODE_OPTIONS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		KITTY_PID: string;
		MANAGERPID: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		P9K_TTY: string;
		SYSTEMD_EXEC_PID: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLOR: string;
		QT_QPA_PLATFORMTHEME: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		WINDOWID: string;
		_P9K_SSH_TTY: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		USER_ZDOTDIR: string;
		KITTY_PUBLIC_KEY: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		INVOCATION_ID: string;
		GTK_EXE_PREFIX: string;
		NODE: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LOCPATH: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		VSCODE_INJECTION: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		GSETTINGS_SCHEMA_DIR: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		NO_AT_BRIDGE: string;
		KITTY_WINDOW_ID: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		GPG_AGENT_INFO: string;
		GJS_DEBUG_OUTPUT: string;
		P9K_SSH: string;
		QT_IM_MODULE: string;
		VSCODE_INSPECTOR_OPTIONS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_NONCE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		_P9K_TTY: string;
		CLUTTER_IM_MODULE: string;
		XDG_DATA_DIRS: string;
		ZDOTDIR: string;
		npm_config_global_prefix: string;
		npm_command: string;
		MEMORY_PRESSURE_WRITE: string;
		LOCAL_GIT_DIRECTORY: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
