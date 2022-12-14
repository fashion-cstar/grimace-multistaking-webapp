import { BNBTokenAddress, NETWORK_BSC } from "../constants/AppConstants"

export const queryGetSymbols = (
  baseCurrency: string,
  network?: string,
  quoteCurrency?: string
) => `
{
  ethereum(network: ${network || NETWORK_BSC}) {
    dexTrades(
      options: {desc: ["block.height", "transaction.index"], limit: 1}
      exchangeName: {in: ["Pancake", "Pancake v2", "Uniswap"]}
      baseCurrency: {is: "${baseCurrency}"}
      quoteCurrency: {is: "${quoteCurrency || BNBTokenAddress}"}
    ) 
    {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S") 
        }
      }
      transaction {
        index
      }
      baseCurrency {
        name
        symbol
        decimals
      }
      quotePrice
    }
  }
}
`

export const queryGetBars = `
query getBars(
	$from: ISO8601DateTime!
	$to: ISO8601DateTime!
	$limit: Int!
	$quoteCurrency: string!
	$baseCurrency: string!
	$network: EthereumNetwork!
	$interval: Int!
) {
	ethereum(network: $network) {
		dexTrades(
			options: { asc: "timeInterval.minute", limit: $limit }
			time: { between: [$from, $to] }
			baseCurrency: { is: $baseCurrency }
			quoteCurrency: { is: $quoteCurrency }
      priceAsymmetry: { lt: 0.7 }
      any: [
        {tradeAmountUsd: { gt: 0.00001 }},
        {tradeAmountUsd: { is: 0 }}
      ]
		) {
			timeInterval {
				minute(count: $interval, format: "%Y-%m-%dT%H:%M:%SZ")
			}
      volume: quoteAmount
      trades: count
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
		}
	}
}
`

export const queryGetBUSDPriceOf = `
  query BUSDPriceOf($baseCurrency: string!, $from: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        options: {limit: 24, asc: "timeInterval.minute"}
        date: {since: $from}
        exchangeName: {in: ["Pancake", "Pancake v2", "Uniswap"]}
        baseCurrency: {is: $baseCurrency}
        quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      ) {
        timeInterval {
          minute(count: 15)
        }
        time: date {
          date
        }
        quoteCurrency {
          symbol
        }
        baseCurrency {
          symbol
        }
        value: quotePrice
      }
    }
  }
`

export const queryGetBNBPriceOf = `
  query BNBPriceOf($baseCurrency: string!, $from: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        options: {limit: 48, asc: "timeInterval.minute"}
        date: {since: $from}
        exchangeName: {in: ["Pancake", "Pancake v2", "Uniswap"]}
        baseCurrency: {is: $baseCurrency}
        quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      ) {
        timeInterval {
          minute(count: 15)
        }
        time: date {
          date
        }
        quoteCurrency {
          symbol
        }
        baseCurrency {
          symbol
        }
        value: quotePrice
      }
    }
  }
`

export const queryPriceInBNB = `
  query getPriceInBNB($baseCurrency: string!, $to: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        options: {limit: 1, desc: "timeInterval.minute"}
        time: {till: $to}
        exchangeName: {in: ["Pancake", "Pancake v2", "Uniswap"]}
        baseCurrency: {is: $baseCurrency}
        quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      ) {
        timeInterval {
          minute(count: 15)
        }
        value: maximum(of: block, get: quote_price)
      }
    }
  }
`

export const queryPriceInBUSD = `
  query getPriceInBUSD($baseCurrency: string!, $to: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        options: {limit: 1, desc: "timeInterval.minute"}
        time: {till: $to}
        exchangeName: {in: ["Pancake", "Pancake v2", "Uniswap"]}
        baseCurrency: {is: $baseCurrency}
        quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      ) {
        timeInterval {
          minute(count: 15)
        }
        value: quotePrice
      }
    }
  }
`

export const queryBNBInBusd_TokenInBNB = `
  query getPriceInBUSD($baseCurrency: string!, $to: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        any: [{exchangeName: {in: ["Pancake", "Pancake v2", "Uniswap"]}, baseCurrency: {is: $baseCurrency}, quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}}, {baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}, quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}}]
        options: {desc: "timeInterval.minute", limitBy: {each: "baseCurrency.symbol", limit: 1}}        
        time: {till: $to}
      ) {
        baseCurrency {
          symbol
        }
        block {
          height
        }
        quoteCurrency {
          symbol
        }
        quote: quotePrice
        timeInterval {
          minute(count: 15)
        }
      }
    }
  }
`

export const queryWalletBalances = `
query getBalancesByAddress($address: string!) {
  ethereum(network: bsc) {
    address(address: {is: $address}) {
      balances {
        currency {
          symbol
          name
          address
          decimals
        }
        value
      }
    }
  }
}
`

export const getSubscriptionId = `
  subscription (
    $network: EthereumNetwork!
    $from: ISO8601DateTime
    $baseAddress: string
    $quoteAddress: string
  ) {
    ethereum(network: $network) {
      dexTrades(
      options: {desc: ["block.height", "tradeIndex"]}
      baseCurrency: {is: $baseAddress}
      quoteCurrency: {is: $quoteAddress}
      time: {since: $from}
      priceAsymmetry: { lt: 0.7 }
      any: [
        {tradeAmountUsd: { gt: 0.00001 }},
        {tradeAmountUsd: { is: 0 }}
      ]
      ) {
      block {
        timestamp {
        time(format: "%FT%TZ")
        }
        height
      }
      tradeIndex
      protocol
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
      volume: quoteAmount
      exchange {
        fullName
      }
      smartContract {
        address {
        address
        annotation
        }
      }
      baseAmount
      baseCurrency {
        address
        symbol
      }
      quoteAmount
      quoteCurrency {
        address
        symbol
      }
      transaction {
        hash
      }
      quotePrice
      }
    }
  }
`

export const getWBNBBusdPrice = `
  query {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
        quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
        options: {desc: ["block.height", "transaction.index"], limit: 1}
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const queryGetBarsWithoutFrom = `
  query getBars(
    $to: ISO8601DateTime!
    $limit: Int!
    $quoteCurrency: string!
    $baseCurrency: string!
    $network: EthereumNetwork!
    $interval: Int!
  ) {
    ethereum(network: $network) {
      dexTrades(
        options: { desc: "timeInterval.minute", limit: $limit }
        time: { before: $to }
        baseCurrency: { is: $baseCurrency }
        quoteCurrency: { is: $quoteCurrency }
        priceAsymmetry: { lt: 0.7 }
        any: [
          {tradeAmountUsd: { gt: 0.00001 }},
          {tradeAmountUsd: { is: 0 }}
        ]
      ) {
        timeInterval {
          minute(count: $interval, format: "%Y-%m-%dT%H:%M:%SZ")
        }
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
