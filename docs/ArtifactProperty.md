# ArtifactProperty

制品属性实体，用于查询制品属性列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Id** | **number** | 属性 ID | [optional] [default to undefined]
**Immutable** | **boolean** | 是否不可变更 | [optional] [default to false]
**Name** | **string** | 属性名称（以 ‘coding.’ 作为属性名称开头的属性，将不可变更及删除，即 Immutable &#x3D; false） | [optional] [default to '']
**Value** | **string** | 属性值 | [optional] [default to '']
**Version** | **string** | 制品版本 | [optional] [default to '']

## Example

```typescript
import { ArtifactProperty } from './api';

const instance: ArtifactProperty = {
    CreatedAt,
    Id,
    Immutable,
    Name,
    Value,
    Version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
