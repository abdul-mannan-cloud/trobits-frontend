"use client";

import React, { useEffect, useRef } from "react";

// Ad Banner Component
function AdBannerF() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn.bmcdn6.com/js/67c24fd7aa72d3d47fc083ad.js?v=" +
      new Date().getTime();

    if (adRef.current) {
      // Type assertion to resolve TypeScript error
      const currentAdElement = adRef.current as HTMLDivElement;
      currentAdElement.innerHTML = "";
      currentAdElement.appendChild(script);
    }

    return () => {
      if (adRef.current) {
        // Type assertion here too
        (adRef.current as HTMLDivElement).innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex justify-center p-6 animate-fade-in-up">
      {/* Increased padding, added animation */}
      <div
        ref={adRef}
        className="67c24fd7aa72d3d47fc083ad bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center border border-gray-600" // More rounded, stronger shadow, gray border
        style={{ display: "block", width: "300px", height: "250px" }}
      >
        {/* Ad content will be injected here by the script */}
      </div>
    </div>
  );
}

// Terra Classic Header Component
const LuncHeader = () => (
  <h1 className="text-7xl font-extrabold mb-12 text-center text-gray-400 drop-shadow-xl animate-fade-in-up">
    {/* Larger text, more margin, stronger shadow, added animation */}
    Terra Classic
  </h1>
);

// Price Graph Component
const PriceGraph = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "CRYPTO:LUNCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark", // Changed to dark theme
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    if (chartRef.current) {
      // Type assertion to resolve TypeScript error
      const currentChartElement = chartRef.current as HTMLDivElement;
      currentChartElement.innerHTML = "";
      currentChartElement.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl p-6 h-[500px] transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] border border-gray-600 animate-fade-in-up">
      {/* Larger height, more padding, stronger effects, gray border, animation */}
      <div
        className="tradingview-widget-container rounded h-full w-full overflow-hidden"
        ref={chartRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        />
      </div>
    </div>
  );
};

// Symbol Info Component
const SymbolInfo = () => {
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "CRYPTO:LUNCUSD",
      width: "100%",
      locale: "en",
      colorTheme: "dark", // Changed to dark theme
      isTransparent: true, // Changed to true for dark theme integration
    });

    if (infoRef.current) {
      // Type assertion to resolve TypeScript error
      const currentInfoElement = infoRef.current as HTMLDivElement;
      currentInfoElement.innerHTML = "";
      currentInfoElement.appendChild(script);
    }
  }, []);

  return (
    <div
      className="w-full h-[500px] bg-gray-800 rounded-xl shadow-2xl p-6 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] border border-gray-600 animate-fade-in-up" // Larger height, more padding, stronger effects, gray border, animation
      ref={infoRef}
    >
      <div className="tradingview-widget-container__widget h-full w-full" />
    </div>
  );
};

// Article Feed Component
const ArticleFeed = () => {
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const feedScript = document.createElement("script");
    feedScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    feedScript.async = true;
    feedScript.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: true, // Changed to true for dark theme integration
      displayMode: "regular",
      width: "100%",
      height: 650, // Increased height
      colorTheme: "dark", // Changed to dark theme
      locale: "en",
      filter: "terra-luna",
    });

    if (feedRef.current) {
      // Type assertion to resolve TypeScript error
      const currentFeedElement = feedRef.current as HTMLDivElement;
      currentFeedElement.innerHTML = "";
      currentFeedElement.appendChild(feedScript);
    }
  }, []);

  return (
    <div className="w-full h-[650px] bg-gray-800 rounded-xl shadow-2xl p-6 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] border border-gray-600 animate-fade-in-up">
      {/* Larger height, more padding, stronger effects, gray border, animation */}
      <div
        className="tradingview-widget-container h-full w-full"
        ref={feedRef}
      />
    </div>
  );
};

// Crypto Calendar Component
const CryptoCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.cryptohopper.com/widgets/js/script";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="rounded-xl shadow-2xl p-6 bg-gray-800 text-gray-200 h-full min-h-[300px] transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] flex flex-col items-center justify-center border border-gray-600 animate-fade-in-up" // More padding, stronger effects, min-height, flex-col, gray border, animation
      ref={calendarRef}
    >
      <div
        className="cryptohopper-web-widget"
        data-id="6"
        data-text_color="#CBD5E0" // Tailwind gray-300 equivalent
        data-background_color="#1F2937" // Tailwind gray-800 equivalent
        data-coins="terra-luna"
        data-numcoins="1000"
      />
    </div>
  );
};

// Main Page Component
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100 p-10 font-sans">
      {/* Enhanced background, more padding, sans-serif font */}
      <div className="max-w-8xl mx-auto space-y-16">
        {/* Wider max-width, more vertical space */}
        <LuncHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Larger gap */}
          <SymbolInfo />
          <PriceGraph />
        </div>
        <AdBannerF />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Larger gap */}
          <div className="lg:col-span-1 flex flex-col space-y-8 lg:space-y-12">
            {/* More vertical space */}
            <CryptoCalendar />
          </div>
          <div className="lg:col-span-2">
            <ArticleFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
