# PrincipalData

查询项目成员主体 响应信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页数 | [optional] [default to undefined]
**PageSize** | **number** | 条数 | [optional] [default to undefined]
**Principals** | [**Array&lt;PrincipalResp&gt;**](PrincipalResp.md) | 成员主体信息 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { PrincipalData } from './api';

const instance: PrincipalData = {
    PageNumber,
    PageSize,
    Principals,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
