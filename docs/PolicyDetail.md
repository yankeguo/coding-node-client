# PolicyDetail

权限组详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **string** | 显示名称 | [optional] [default to '']
**CurrentVersion** | **string** | 版本号 | [optional] [default to '']
**CurrentVersionId** | **number** | 版本记录 ID | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**Name** | **string** | 名称 | [optional] [default to '']
**PolicyDocument** | [**PolicyDocument**](PolicyDocument.md) |  | [optional] [default to undefined]
**PolicyId** | **number** | 权限组 ID | [optional] [default to undefined]
**PolicyType** | **string** | 权限组类型：IDENTITY | RESOURCE | [optional] [default to '']
**Scope** | **string** | 作用范围： SYSTEM | CUSTOM | [optional] [default to '']

## Example

```typescript
import { PolicyDetail } from './api';

const instance: PolicyDetail = {
    Alias,
    CurrentVersion,
    CurrentVersionId,
    Description,
    Name,
    PolicyDocument,
    PolicyId,
    PolicyType,
    Scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
