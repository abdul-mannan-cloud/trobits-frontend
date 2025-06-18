import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

interface CryptoData {
  coin: string;
  icon: StaticImageData;
  visits: string;
  burns: string;
  revenue: string;
  visits7Day: string;
  revenue7Day: string;
  burns7Day: string;
  visits30Day: string;
  revenue30Day: string;
  burns30Day: string;
}

interface TransparentCardProps {
  cryptoData: CryptoData;
  index: number;
}

const TransparentCard: React.FC<TransparentCardProps> = ({
  cryptoData,
  index,
}) => {
  const { coin, icon, revenue, revenue30Day } = cryptoData;

  const formatNumber = (value: string) => Number(value).toLocaleString();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol:
        coin.toUpperCase() === "SHIB" ? "CRYPTO:SHIBUSD" : "CRYPTO:LUNCUSD",
      width: "100%",
      height: 50,
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
    });

    const container = document.getElementById(`tradingview-widget-${index}`);
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [coin, index]);

  return (
    <div className="bg-gray-900/80 border border-gray-800/50 backdrop-blur-xl rounded-3xl p-4 md:p-6 w-full max-w-[280px] min-h-[400px] text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-gray-700/70 group mx-2">
      {/* TradingView Widget */}
      <div className="tradingview-widget-container mb-0 text-sm">
        <div
          id={`tradingview-widget-${index}`}
          className="tradingview-widget-container__widget"
        ></div>
      </div>

      {/* Header with coin info */}
      <div className="flex items-center justify-between mb-6">
        {/* Live indicator */}
        <div className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-green-400">Live</span>
        </div>
      </div>

      {/* Revenue Cards (1 Day + Lifetime) */}
      <div className="bg-black/30 border border-gray-800/30 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">1 Day Revenue</p>
            <p className="text-xl font-bold text-white">
              ${formatNumber(revenue)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Lifetime Revenue</p>
            <p className="text-xl font-bold text-white">
              ${formatNumber(revenue30Day)}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {cryptoData.coin === "SHIB" ? (
          <>
            <Link
              href="/archive/shiba"
              className="flex-1 bg-white text-black font-semibold py-3 px-4 rounded-2xl text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm"
            >
              SHIB Burn
            </Link>
            <Link
              href="/shiba"
              className="flex-1 bg-gray-800 border border-gray-700 text-white font-semibold py-3 px-4 rounded-2xl text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm"
            >
              Details
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/archive/lunc"
              className="flex-1 bg-white text-black font-semibold py-3 px-4 rounded-2xl text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm"
            >
              LUNC Burn
            </Link>
            <Link
              href="/lunc"
              className="flex-1 bg-gray-800 border border-gray-700 text-white font-semibold py-3 px-4 rounded-2xl text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm"
            >
              Details
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TransparentCard;
