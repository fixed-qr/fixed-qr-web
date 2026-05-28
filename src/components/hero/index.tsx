"use client";

import Link from "next/link";
import styles from "./hero.module.css";
import { useAppConfigStore } from "@/store/app-config-store";
import { useEffect } from "react";

export default function Hero() {
  const appConfig = useAppConfigStore((state) => state.appConfig);
  const loading = useAppConfigStore((state) => state.loading);
  const error = useAppConfigStore((state) => state.error);
  const fetchAppConfig = useAppConfigStore((state) => state.fetchAppConfig);

  useEffect(() => {
    if (!appConfig && !loading && !error) {
      fetchAppConfig();
    }
  }, [appConfig, loading, error, fetchAppConfig]);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>Built for Small Businesses</div>
          <h1 className={styles.title}>Generate UPI QR Codes Instantly</h1>

          <p className={styles.description}>
            FixedQR helps shop owners generate payment QR codes faster, reuse
            common amounts instantly, and reduce repetitive manual work during
            busy checkout hours.
          </p>

          <div className={styles.actions}>
            <Link
              href={appConfig?.release.downloadUrl || ""}
              download
              target="_blank"
              className={styles.primaryButton}
            >
              Download APK
            </Link>

            <a
              href="https://github.com/fixed-qr"
              target="_blank"
              className={styles.secondaryButton}
            >
              Learn More
            </a>
          </div>

          <div className={styles.stats}>
            <div>
              <strong>Fast</strong>
              <span>QR Generation</span>
            </div>

            <div>
              <strong>Local-First</strong>
              <span>Privacy Focused</span>
            </div>

            <div>
              <strong>Simple</strong>
              <span>Daily Workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
