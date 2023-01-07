interface ChooseImageAutoUploadReq {
    dir: ChooseImagDir;
    maxAssets: number;
}
declare enum ChooseImagDir {
    "carImg" = "carImg",
    "vinImage" = "vinImage",
    "drivingLicImg" = "drivingLicImg",
    "businessLic" = "businessLic",
    "video" = "video",
    "iDCardImg" = "iDCardImg",
    "doorhead" = "doorhead",
    "avatar" = "avatar"
}
