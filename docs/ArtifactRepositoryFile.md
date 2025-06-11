# ArtifactRepositoryFile

制品库文件列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArtifactType** | **string** | 制品类型 | [optional] [default to '']
**DownloadUrl** | **string** | 符合对应制品标准协议的下载链接（有效期：300 s） | [optional] [default to '']
**Hash** | **string** | 制品版本 Hash | [optional] [default to '']
**Host** | **string** | 制品仓库 Host | [optional] [default to '']
**PackageName** | **string** | 制品包名称 | [optional] [default to '']
**Path** | **string** | 相对于仓库级别的文件路径 | [optional] [default to '']
**Project** | **string** | 项目名称 | [optional] [default to '']
**Repository** | **string** | 制品仓库名称 | [optional] [default to '']
**VersionName** | **string** | 制品版本 | [optional] [default to '']

## Example

```typescript
import { ArtifactRepositoryFile } from './api';

const instance: ArtifactRepositoryFile = {
    ArtifactType,
    DownloadUrl,
    Hash,
    Host,
    PackageName,
    Path,
    Project,
    Repository,
    VersionName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
