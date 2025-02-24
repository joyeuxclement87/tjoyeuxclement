import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkle } from "@phosphor-icons/react";

export default function PageLoader() {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    const loadingStages = [
      { text: "Starting up", duration: 1000 },
      { text: "Powering engines", duration: 1000 },
      { text: "Loading assets", duration: 1500 },
      { text: "Preparing canvas", duration: 1500 },
      { text: "Almost there", duration: 1000 }
    ];

    let currentStage = 0;
    let progressInterval: NodeJS.Timeout;

    const startLoading = () => {
      // Progress counter with variable speed
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const nextProgress = prev + 0.5;
          if (nextProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return nextProgress;
        });
      }, 20);

      // Stage transitions
      const advanceStage = () => {
        if (currentStage < loadingStages.length) {
          setStage(currentStage);
          setLoadingText(loadingStages[currentStage].text);
          currentStage++;
          if (currentStage < loadingStages.length) {
            setTimeout(advanceStage, loadingStages[currentStage - 1].duration);
          }
        }
      };

      // Start the sequence
      advanceStage();
    };

    // Initial delay before starting
    setTimeout(startLoading, 500);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center max-w-sm w-full mx-4">
        {/* Initial Animation */}
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute"
            >
              <Sparkle className="text-primary w-12 h-12 animate-spin-slow" weight="fill" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <motion.h1 
            animate={{ 
              color: ["#60a5fa", "#3b82f6", "#60a5fa"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl font-display relative"
          >
            TJ<span className="text-primary">CLEMENT</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl -z-10"
            />
          </motion.h1>
        </motion.div>

        {/* Progress Section */}
        <div className="space-y-4 w-full">
          <div className="h-0.5 w-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
            />
          </div>

          {/* Loading Text */}
          <div className="flex items-center justify-between text-xs px-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white/40 font-medium"
              >
                {loadingText}
              </motion.p>
            </AnimatePresence>
            <motion.div className="flex items-center gap-2">
              <span className="text-white/60 tabular-nums">{Math.round(progress)}%</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border-2 border-primary/30 border-t-primary rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
