# ArtifactPropertyBean

简单制品属性实体，用于新增、修改制品属性

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | 属性名称（以 ‘coding.’ 作为属性名称开头的属性，将不可变更及删除，即 Immutable &#x3D; false） | [default to '']
**Value** | **string** | 属性值 | [default to '']

## Example

```typescript
import { ArtifactPropertyBean } from './api';

const instance: ArtifactPropertyBean = {
    Name,
    Value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
