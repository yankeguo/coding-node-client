# ArtifactsOpenApiRepositoryData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **number** | 制品类型(1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan,10-cocoapods,11-rpm,12-Go) | [default to 0]
**StorageRule** | **number** | 存储规则 | [default to 0]
**Description** | **string** | 项目描述 | [default to '']
**CreatorId** | **number** | 创建人ID | [default to 0]
**ProjectId** | **number** | 项目ID | [default to 0]
**Id** | **number** | 制品仓库ID | [default to 0]
**TeamId** | **number** | 团队ID | [default to 0]
**ReleaseStrategy** | **number** | 版本发布策略：1-允许覆盖发布;2-不允许覆盖发布;3-快照策略 | [default to 0]
**Deleting** | **boolean** | 是否删除 | [default to false]
**Name** | **string** | 制品库名称 | [default to '']

## Example

```typescript
import { ArtifactsOpenApiRepositoryData } from './api';

const instance: ArtifactsOpenApiRepositoryData = {
    Type,
    StorageRule,
    Description,
    CreatorId,
    ProjectId,
    Id,
    TeamId,
    ReleaseStrategy,
    Deleting,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
