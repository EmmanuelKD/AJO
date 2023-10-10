"use client"
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import dynamic from "next/dynamic";
import { FC, ReactNode, useCallback, useContext, useMemo } from "react";
import { AutoConnectProvider, useAutoConnect } from "./AutoConnectProvider";
import {
  NetworkConfigurationProvider,
  useNetworkConfiguration,
} from "./NetworkConfigurationProvider";
import { AuthContextProvider } from "./auth";
import { NotificationContext } from "./notification/context";
import { NotificationContextProvider } from "./notification/index.notificationContext";
import { ProductContextProvider } from "./product";


const ReactUIWalletModalProviderDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletModalProvider,
  { ssr: false }
);

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();
  const { networkConfiguration } = useNetworkConfiguration();
  const { addNotification } = useContext(NotificationContext);
  const network = networkConfiguration as WalletAdapterNetwork;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  console.log(network);

  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

  const onError = useCallback((error: WalletError) => {
    addNotification({
      variant: "error",
      message: error.message ? `${error.name}: ${error.message}` : error.name,
    });
    console.error(error);
  }, []);

  return (
    // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        onError={onError}
        autoConnect={autoConnect}
      >
        <ReactUIWalletModalProviderDynamic>
          {children}
        </ReactUIWalletModalProviderDynamic>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <NotificationContextProvider>
          <ProductContextProvider>
            <NetworkConfigurationProvider>
              {/** adding the context here */}
              <AutoConnectProvider>
                <WalletContextProvider>{children}</WalletContextProvider>
              </AutoConnectProvider>
            </NetworkConfigurationProvider>
          </ProductContextProvider>
        </NotificationContextProvider>
      </AuthContextProvider>
    </>
  );
};
