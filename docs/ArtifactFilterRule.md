# ArtifactFilterRule

制品筛选规则实体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArtifactType** | **Array&lt;number&gt;** | 制品类型筛选（1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan;10-cocoapods;11-rpm） | [optional] [default to undefined]
**Package** | [**Array&lt;ArtifactFilterRuleDetail&gt;**](ArtifactFilterRuleDetail.md) | 包筛选 | [optional] [default to undefined]
**PackageVersion** | [**Array&lt;ArtifactFilterRuleDetail&gt;**](ArtifactFilterRuleDetail.md) | 版本筛选 | [optional] [default to undefined]
**ProjectName** | **Array&lt;string&gt;** | 项目筛选 | [optional] [default to undefined]
**Repository** | **Array&lt;string&gt;** | 仓库筛选 | [optional] [default to undefined]

## Example

```typescript
import { ArtifactFilterRule } from './api';

const instance: ArtifactFilterRule = {
    ArtifactType,
    Package,
    PackageVersion,
    ProjectName,
    Repository,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
