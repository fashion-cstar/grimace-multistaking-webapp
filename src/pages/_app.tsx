import '../styles/globals.css'
import { AppProps } from "next/app"
import { BSC, Config, DAppProvider, Mainnet, BSCTestnet, ChainId } from "@usedapp/core"
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import theme from "@app/theme/theme"
import Layout from '@app/common/layout/Layout'
import { CssBaseline } from '@mui/material'
import { Rpc_URLS } from '@app/constants/AppConstants'
import { RefreshContextProvider, GrimaceStakingClubProvider, GrimaceRegisterProvider } from "@app/contexts"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

interface WolfAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()
// mainet
const config: Config = {
  // readOnlyChainId: BSC.chainId,
  readOnlyUrls: {
    [BSC.chainId]: Rpc_URLS[ChainId.BSC] ?? '',
    [BSCTestnet.chainId]: Rpc_URLS[ChainId.BSCTestnet] ?? ''
  },
  // networks: [BSC, Mainnet, BSCTestnet],
  autoConnect: false
}


function createEmotionCache() {
  return createCache({ key: "css" })
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: WolfAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <DAppProvider config={config}>
        <RefreshContextProvider>
          <GrimaceStakingClubProvider>
            <GrimaceRegisterProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
              <ToastContainer />              
            </GrimaceRegisterProvider>
          </GrimaceStakingClubProvider>
        </RefreshContextProvider>
      </DAppProvider>
    </CacheProvider>
  )
}

export default MyApp

