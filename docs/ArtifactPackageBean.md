# ArtifactPackageBean

制品包（镜像）

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Description** | **string** | 制品包描述 | [optional] [default to '']
**Id** | **number** | 制品包 ID | [optional] [default to undefined]
**LatestVersionId** | **number** | 最新推送版本的版本号 ID | [optional] [default to undefined]
**LatestVersionName** | **string** | 最新推送版本的版本号 | [optional] [default to '']
**LatestVersionReleaseStatus** | **number** | 最新推送版本的版本发布状态：1-未发布;2-已发布 | [optional] [default to undefined]
**Name** | **string** | 制品包名称 | [optional] [default to '']
**ReleaseStrategy** | **number** | 版本发布策略：1-允许覆盖发布;2-不允许覆盖发布;3-快照策略;4-继承于仓库的策略 | [optional] [default to undefined]
**RepoId** | **number** | 制品仓库 ID | [optional] [default to undefined]
**VersionCount** | **number** | 包下的版本数量 | [optional] [default to undefined]

## Example

```typescript
import { ArtifactPackageBean } from './api';

const instance: ArtifactPackageBean = {
    CreatedAt,
    Description,
    Id,
    LatestVersionId,
    LatestVersionName,
    LatestVersionReleaseStatus,
    Name,
    ReleaseStrategy,
    RepoId,
    VersionCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
