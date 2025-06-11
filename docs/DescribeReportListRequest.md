# DescribeReportListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **string** | 创建时间 | [optional] [default to undefined]
**Keyword** | **string** | 报告名称关键词 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**StartAt** | **string** | 创建时间 | [optional] [default to undefined]
**Status** | **string** | 报告状态：CREATING 创建中，AVAILABLE 可用，UNAVAILABLE 不可用 | [optional] [default to undefined]

## Example

```typescript
import { DescribeReportListRequest } from './api';

const instance: DescribeReportListRequest = {
    EndAt,
    Keyword,
    ProjectName,
    StartAt,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
