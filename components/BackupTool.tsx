// studio/components/BackupTool.tsx

import React, { useState } from "react";
import {
  Card,
  Button,
  Text,
  Stack,
  useToast,
  Flex,
  Heading,
} from "@sanity/ui";
import { DownloadIcon } from "@sanity/icons";

const BackupTool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleBackup = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.SANITY_STUDIO_SITE_BASE_URL}/api/backup`
      );
      if (!response.ok) {
        throw new Error(`Backup failed: ${response.statusText}`);
      }

      const disposition = response.headers.get("content-disposition");
      let filename = "sanity-backup.tar.gz";
      if (disposition && disposition.includes("filename=")) {
        filename = disposition.split("filename=")[1].replace(/"/g, "");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      toast.push({
        status: "success",
        title: "Backup ready 🎉",
        description: `Downloaded ${filename}`,
      });
    } catch (err) {
      toast.push({
        status: "error",
        title: "Backup failed ❌",
        description: err instanceof Error ? err.message : "Unknown error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
    >
      <Card
        padding={5}
        margin={5}
        radius={4}
        shadow={2}
        style={{
          maxWidth: "420px",
          width: "100%",
          border: "1px solid #e5e7eb",
        }}
      >
        <Stack space={4}>
          {/* Heading + status row */}
          <Flex align="center" justify="space-between">
            <Heading size={3} weight="semibold">
              Dataset Export
            </Heading>

            {isLoading && (
              <Text size={2} style={{ color: "#f59e0b", fontWeight: 500 }}>
                In Progress...
              </Text>
            )}
          </Flex>

          <Text muted size={2}>
            Keep your project safe with on-demand dataset backups, ready to download anytime.
          </Text>
          <Button
            onClick={handleBackup}
            text={isLoading ? "Generating..." : "Download Backup"}
            icon={isLoading ?'': DownloadIcon}
            tone="primary"
            disabled={isLoading}
            style={{
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Stack>
      </Card>
    </Flex>
  );
};

export default BackupTool;
