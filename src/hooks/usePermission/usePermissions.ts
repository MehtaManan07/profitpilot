import { useCallback } from "react";
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";
import { EPermissionTypes, TUsePermissionsReturnType } from "./types";
import { isAndroid, isIos } from "@utils";

const usePermissions = (typeOfPermission: EPermissionTypes) => {
  const getPermission = useCallback(() => {
    //check if typeOfPermission exist in EPermissionTypes
    if (
      !typeOfPermission ||
      !Object.values(EPermissionTypes).includes(typeOfPermission)
    ) {
      throw new Error("Unsupported Type of permission.");
    }
    if (isIos) {
      switch (typeOfPermission) {
        case EPermissionTypes.CAMERA:
          return PERMISSIONS.IOS.CAMERA;
        default:
          return PERMISSIONS.IOS.CAMERA;
      }
    }

    if (isAndroid) {
      switch (typeOfPermission) {
        case EPermissionTypes.CAMERA:
          return PERMISSIONS.ANDROID.CAMERA;
        default:
          return PERMISSIONS.ANDROID.CAMERA;
      }
    }

    throw new Error("Unsupported Operating System.");
  }, [typeOfPermission]);

  const askPermissions =
    useCallback(async (): Promise<TUsePermissionsReturnType> => {
      return new Promise<TUsePermissionsReturnType>((resolve, reject) => {
        //ask permissions from user
        //if error present, return error
        try {
          request(getPermission()).then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                return reject({
                  type: RESULTS.UNAVAILABLE,
                });
              case RESULTS.DENIED:
                return reject({
                  type: RESULTS.DENIED,
                });
              case RESULTS.GRANTED:
                return resolve({
                  type: RESULTS.GRANTED,
                });
              case RESULTS.BLOCKED:
                return reject({
                  type: RESULTS.BLOCKED,
                });
              case RESULTS.LIMITED:
                return resolve({
                  type: RESULTS.LIMITED,
                });
            }
          });
        } catch (e: { data: { message?: string } } | unknown) {
          return reject({
            isError: true,
            errorMessage: "Something went wrong while taking permissions.",
          });
        }
      });
    }, [getPermission]);

  return {
    askPermissions,
  };
};

export default usePermissions;
