import React from "react";
import "./App.css";
import { ContentContainer } from "./components/structure/ContentContainer";
import { Route, Switch } from "react-router-dom";
import { useCryptoWalletIntegrationStore } from "./store/storeHooks";
import { observer } from "mobx-react";
import { NoEthereumProviderSection } from "./pages/NoEthereumProviderSection";
import { GuardiansRegisterOrEditPage } from "./pages/GuardiandRegisterOrEdit/GuardianRegisterOrEditPage";
import { Background } from "./components/structure/Background";
import { Header } from "./components/structure/Header";

const App = observer(() => {
  const cryptoWalletIntegrationStore = useCryptoWalletIntegrationStore();

  if (!cryptoWalletIntegrationStore.isConnectedToWallet) {
    return (
      <main className="App">
        <ContentContainer id={"appContainer"}>
          <NoEthereumProviderSection
            walletConnectionPhase={"connect"}
            actionFunction={() => cryptoWalletIntegrationStore.askToConnect()}
          />
        </ContentContainer>
      </main>
    );
  }

  return (
    <main className="App">
      <Background prismVersion={"0.5"} />
      <Header />
      <ContentContainer id={"appContainer"}>
        <Switch>
          <Route path={"/"}>
            <GuardiansRegisterOrEditPage />
          </Route>
        </Switch>
      </ContentContainer>
    </main>
  );
});

export default App;
