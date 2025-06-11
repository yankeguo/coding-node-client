# TeamArtifact

制品完整信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArtifactType** | **number** | 制品类型（1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan;10-cocoapods;11-rpm） | [optional] [default to undefined]
**CreatedAt** | **number** | 推送时间 | [optional] [default to undefined]
**Description** | **string** | 制品描述 | [optional] [default to '']
**DownloadCount** | **string** | 下载次数 | [optional] [default to '']
**Hash** | **string** | 制品hash | [optional] [default to '']
**Package** | **string** | 制品名称 | [optional] [default to '']
**PackageVersion** | **string** | 制品版本 | [optional] [default to '']
**PkgId** | **number** | 制品包ID | [optional] [default to undefined]
**ProjectId** | **number** | 项目ID | [optional] [default to undefined]
**ProjectName** | **boolean** | 项目名称 | [optional] [default to false]
**ReleaseStatus** | **number** | 发布状态（1&#x3D;未发布，2&#x3D;已发布） | [optional] [default to undefined]
**RepoId** | **number** | 制品仓库ID | [optional] [default to undefined]
**Repository** | **string** | 制品仓库名称 | [optional] [default to '']
**Size** | **number** | 制品代销 | [optional] [default to undefined]
**VersionId** | **number** | 制品版本ID | [optional] [default to undefined]

## Example

```typescript
import { TeamArtifact } from './api';

const instance: TeamArtifact = {
    ArtifactType,
    CreatedAt,
    Description,
    DownloadCount,
    Hash,
    Package,
    PackageVersion,
    PkgId,
    ProjectId,
    ProjectName,
    ReleaseStatus,
    RepoId,
    Repository,
    Size,
    VersionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
