import { BaseButton, ScreenFrame, StyledText } from "@components";
import { goToSettings } from "@utils";
import { EPermissionTypes, usePermissions } from "hooks";

import { useCallback, useEffect, useState } from "react";
import { Alert, BackHandler, View } from "react-native";
import { RESULTS } from "react-native-permissions";

import { CameraScanner } from "./components";
import styles from "./styles";

const ScannerScreen = () => {
  const { askPermissions } = usePermissions(EPermissionTypes.CAMERA);
  const [cameraShown, setCameraShown] = useState(false);
  const [qrText, setQrText] = useState("");

  const handleBackButtonClick = useCallback(() => {
    if (cameraShown) {
      setCameraShown(false);
    }
    return false;
  }, [cameraShown]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, [handleBackButtonClick]);

  const takePermissions = async () => {
    askPermissions()
      .then((response) => {
        //permission given for camera
        if (
          response.type === RESULTS.LIMITED ||
          response.type === RESULTS.GRANTED
        ) {
          setCameraShown(true);
        }
      })
      .catch((error) => {
        if ("isError" in error && error.isError) {
          Alert.alert(
            error.errorMessage ||
              "Something went wrong while taking camera permission"
          );
        }
        if ("type" in error) {
          if (error.type === RESULTS.UNAVAILABLE) {
            Alert.alert("This feature is not supported on this device");
          } else if (
            error.type === RESULTS.BLOCKED ||
            error.type === RESULTS.DENIED
          ) {
            Alert.alert(
              "Permission Denied",
              "Please give permission from settings to continue using camera.",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                { text: "Go To Settings", onPress: () => goToSettings() },
              ]
            );
          }
        }
      });
  };

  const handleReadCode = (value: string) => {
    setQrText(value);
    setCameraShown(false);
  };

  return (
    <ScreenFrame>
      {cameraShown ? (
        <CameraScanner
          setIsCameraShown={setCameraShown}
          onReadCode={handleReadCode}
        />
      ) : (
        <>
          <View style={styles.container}>
            <StyledText>QR data: {qrText}</StyledText>
          </View>
          <View style={styles.bottomButton}>
            <BaseButton label="Open QR Scanner" onPress={takePermissions} />
          </View>
        </>
      )}
    </ScreenFrame>
  );
};

export default ScannerScreen;
