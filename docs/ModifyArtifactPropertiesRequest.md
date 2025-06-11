# ModifyArtifactPropertiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Package** | **string** | 包名 | [optional] [default to undefined]
**PackageVersion** | **string** | 版本号 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**PropertySet** | [**Array&lt;ArtifactPropertyBean&gt;**](ArtifactPropertyBean.md) | 属性列表 | [optional] [default to undefined]
**Repository** | **string** | 仓库名 | [optional] [default to undefined]

## Example

```typescript
import { ModifyArtifactPropertiesRequest } from './api';

const instance: ModifyArtifactPropertiesRequest = {
    Package,
    PackageVersion,
    ProjectId,
    PropertySet,
    Repository,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
