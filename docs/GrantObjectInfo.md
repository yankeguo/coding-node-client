# GrantObjectInfo

授权对象信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [default to undefined]
**GrantObjectId** | **string** | 授权对象 ID | [default to '']
**GrantObjectName** | **string** | 授权对象名称 | [default to '']
**GrantScope** | **string** | 授权对象类型：USER,USER_GROUP,DEPARTMENT | [default to '']

## Example

```typescript
import { GrantObjectInfo } from './api';

const instance: GrantObjectInfo = {
    CreatedAt,
    GrantObjectId,
    GrantObjectName,
    GrantScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
