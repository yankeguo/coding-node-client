# CasesDataSchema

测试用例列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cases** | [**Array&lt;Case&gt;**](Case.md) | 用例列表 | [optional] [default to undefined]
**Page** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页的大小 | [optional] [default to undefined]
**Total** | **number** | 所有行数 | [optional] [default to undefined]
**TotalPage** | **number** | 全部页 | [optional] [default to undefined]

## Example

```typescript
import { CasesDataSchema } from './api';

const instance: CasesDataSchema = {
    Cases,
    Page,
    PageSize,
    Total,
    TotalPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
