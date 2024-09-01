import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";

import {
  Camera,
  CameraRuntimeError,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import { useIsFocused } from "@react-navigation/native";
import { ICameraScannerProps } from "hooks/usePermission/types";
import { isIos } from "@utils";

const CameraScanner = ({ onReadCode }: ICameraScannerProps) => {
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);
  const isFocused = useIsFocused();
  const [isCameraInitialized, setIsCameraInitialized] = useState(isIos);
  const [isActive, setIsActive] = useState(isIos);
  const [codeScanned, setCodeScanned] = useState("");

  useEffect(() => {
    if (codeScanned) {
      onReadCode(codeScanned);
    }
  }, [codeScanned, onReadCode]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCameraInitialized) {
      timeout = setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }
    setIsActive(false);
    return () => {
      clearTimeout(timeout);
    };
  }, [isCameraInitialized]);

  const onInitialized = () => {
    setIsCameraInitialized(true);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        if (codes[0].value) {
          setIsActive(false);
          setTimeout(() => setCodeScanned(codes[0]?.value ?? ""), 500);
        }
      }
      return;
    },
  });

  const onError = (error: CameraRuntimeError) => {
    Alert.alert("Error!", error.message);
  };

  if (device == null) {
    Alert.alert("Error!", "Camera could not be started");
  }

  if (isFocused && device) {
    return (
      <Camera
        ref={camera}
        codeScanner={codeScanner}
        device={device}
        isActive={isActive && isFocused ? isCameraInitialized : false}
        photo={false}
        style={StyleSheet.absoluteFillObject}
        torch={"off"}
        onError={onError}
        onInitialized={onInitialized}
      />
    );
  }
};

export default CameraScanner;
