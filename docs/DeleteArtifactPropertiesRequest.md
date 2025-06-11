# DeleteArtifactPropertiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Package** | **string** | 包名 | [optional] [default to undefined]
**PackageVersion** | **string** | 版本号 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**PropertyNameSet** | **Array&lt;string&gt;** | 属性名称列表（ 以 ‘coding.’ 作为属性名称开头的属性，将不可删除） | [optional] [default to undefined]
**Repository** | **string** | 仓库名 | [optional] [default to undefined]

## Example

```typescript
import { DeleteArtifactPropertiesRequest } from './api';

const instance: DeleteArtifactPropertiesRequest = {
    Package,
    PackageVersion,
    ProjectId,
    PropertyNameSet,
    Repository,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
