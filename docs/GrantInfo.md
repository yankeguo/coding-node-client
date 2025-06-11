# GrantInfo

授权信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantObjectId** | **string** | 授权对象 ID | [default to '']
**GrantScope** | **string** | 授权对象类型：USER,USER_GROUP,DEPARTMENT | [default to '']
**PolicyId** | **number** | 权限组 ID | [default to undefined]
**PrincipalKey** | **string** | 身份 key，后期扩展场景使用，暂时留空即可 | [optional] [default to '']
**PrincipalValue** | **string** | 身份 value，后期扩展场景使用，暂时留空即可 | [optional] [default to '']

## Example

```typescript
import { GrantInfo } from './api';

const instance: GrantInfo = {
    GrantObjectId,
    GrantScope,
    PolicyId,
    PrincipalKey,
    PrincipalValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
