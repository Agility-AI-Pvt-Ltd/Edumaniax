import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { FinanceProvider } from "./contexts/FinanceContext.jsx";
import { DMProvider } from "./contexts/DMContext";
import { CommunicationProvider } from "./contexts/CommunicationContext";
import { ComputersProvider } from "./contexts/ComputersContext";
import { EntreprenerushipProvider } from "./contexts/EntreprenerushipContext";
import { EnvirnomentProvider } from "./contexts/EnvirnomentContext";
import { LawProvider } from "./contexts/LawContext";
import { LeadershipProvider } from "./contexts/LeadershipContext";
import { SELProvider } from "./contexts/SELContext";
import { PerformanceProvider } from "./contexts/PerformanceContext";

import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FinanceProvider>
        <DMProvider>
          <CommunicationProvider>
            <ComputersProvider>
              <EntreprenerushipProvider>
                <EnvirnomentProvider>
                  <LawProvider>
                    <LeadershipProvider>
                      <SELProvider>
                        <PerformanceProvider>
                          <App />
                          <Toaster />
                        </PerformanceProvider>
                      </SELProvider>
                    </LeadershipProvider>
                  </LawProvider>
                </EnvirnomentProvider>
              </EntreprenerushipProvider>
            </ComputersProvider>
          </CommunicationProvider>
        </DMProvider>
      </FinanceProvider>
    </AuthProvider>
  </StrictMode>
);
