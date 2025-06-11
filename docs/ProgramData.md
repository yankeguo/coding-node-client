# ProgramData

项目集分页参数

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 请求页数 | [optional] [default to undefined]
**PageSize** | **number** | 请求条数 | [optional] [default to undefined]
**Programs** | [**Array&lt;Program&gt;**](Program.md) | 项目集列表 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { ProgramData } from './api';

const instance: ProgramData = {
    PageNumber,
    PageSize,
    Programs,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
