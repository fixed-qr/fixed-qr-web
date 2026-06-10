"use client";

import Link from "next/link";
import styles from "./hero.module.css";
import { useEffect } from "react";
import Image from "next/image";
import { useAppUpdateStore } from "@/store/app-update-store";

export default function Hero() {
  const checkAppUpdate = useAppUpdateStore(state => state.checkAppUpdate)
  const isLoading = useAppUpdateStore(state => state.isLoading)
  const appUpdate = useAppUpdateStore(state => state.appUpdate)
  const error = useAppUpdateStore(state => state.error)

  useEffect(() => {
    if (!isLoading && !appUpdate && !error) {
      checkAppUpdate();
    }
  }, [checkAppUpdate]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
            <div>
              <Image src="/logo.png" alt="app-logo" width={64} height={64}/>
            </div>
          <div className={styles.badge}>FixedQR</div>
          <h1 className={styles.title}>Instant UPI QR Code Generator</h1>

          <p className={styles.description}>
            FixedQR helps shop owners generate payment QR codes faster, reuse
            common amounts instantly, and reduce repetitive manual work during
            busy checkout hours.
          </p>

          <div className={styles.actions}>
            <Link
              href={appUpdate ? appUpdate.downloadUrl : ""}
              download
              target="_blank"
              className={styles.primaryButton}
            >
              Download APK
            </Link>

            <a
              href="https://github.com/fixed-qr/fixed-qr"
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
