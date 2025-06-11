# DescribeArtifactFileDownloadUrlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | **string** | 文件名称 | [optional] [default to undefined]
**Package** | **string** | 包名 | [optional] [default to undefined]
**PackageVersion** | **string** | 版本号 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**Repository** | **string** | 仓库名 | [optional] [default to undefined]
**Timeout** | **number** | 下载链接超时时间（单位：秒），默认：300 | [optional] [default to undefined]

## Example

```typescript
import { DescribeArtifactFileDownloadUrlRequest } from './api';

const instance: DescribeArtifactFileDownloadUrlRequest = {
    FileName,
    Package,
    PackageVersion,
    ProjectId,
    Repository,
    Timeout,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
