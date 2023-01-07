interface ChooseImageAutoUploadReq {
    // 图像目录
    dir: ChooseImagDir;
    maxAssets: number;

}
enum ChooseImagDir {
    "carImg" = "carImg",
    "vinImage" = "vinImage",
    "drivingLicImg" = "drivingLicImg",
    "businessLic" = "businessLic",
    "video" = "video",
    "iDCardImg" = "iDCardImg",
    "doorhead" = "doorhead",
    "avatar" = "avatar",
}