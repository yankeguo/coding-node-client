# ArtifactRepositoryBean

制品仓库实体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessLevel** | **number** | 仓库访问权限：1-项目内;2-团队内;3-公开 | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Description** | **string** | 仓库描述 | [optional] [default to '']
**Id** | **number** | 仓库 ID | [optional] [default to undefined]
**Name** | **string** | 仓库名称 | [optional] [default to '']
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**ReleaseStrategy** | **number** | 版本发布策略：1-允许覆盖发布;2-不允许覆盖发布;3-快照策略 | [optional] [default to undefined]
**TeamId** | **number** | 团队 ID | [optional] [default to undefined]
**Type** | **number** | 仓库类型：1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan;10-cocoapods;11-rpm | [optional] [default to undefined]

## Example

```typescript
import { ArtifactRepositoryBean } from './api';

const instance: ArtifactRepositoryBean = {
    AccessLevel,
    CreatedAt,
    Description,
    Id,
    Name,
    ProjectId,
    ReleaseStrategy,
    TeamId,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
