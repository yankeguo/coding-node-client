# PrincipalResp

成员主体返回信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 添加时间 | [optional] [default to undefined]
**Policies** | [**Array&lt;Policy&gt;**](Policy.md) | 权限组Id | [optional] [default to undefined]
**PrincipalId** | **string** | 成员主体Id | [optional] [default to '']
**PrincipalName** | **string** | 成员主体名称 | [optional] [default to '']
**PrincipalType** | **string** | 成员主体类型 | [optional] [default to '']

## Example

```typescript
import { PrincipalResp } from './api';

const instance: PrincipalResp = {
    CreatedAt,
    Policies,
    PrincipalId,
    PrincipalName,
    PrincipalType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
