# CreateArtifactRepositoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessLevel** | **number** | 仓库权限范围:1-项目内;2-团队内;3-公开，默认：1-项目内 | [optional] [default to undefined]
**AllowProxy** | **boolean** | 是否开启代理，仅支持当 Type 为 3-maven;4-npm; 5-PyPI;7-composer;10-cocoapods 时可为 true，默认：false | [optional] [default to undefined]
**Description** | **string** | 仓库描述信息 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**RepositoryName** | **string** | 仓库名称 | [optional] [default to undefined]
**Type** | **number** | 仓库类型:1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan;10-cocoapods;11-rpm | [optional] [default to undefined]

## Example

```typescript
import { CreateArtifactRepositoryRequest } from './api';

const instance: CreateArtifactRepositoryRequest = {
    AccessLevel,
    AllowProxy,
    Description,
    ProjectId,
    RepositoryName,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
