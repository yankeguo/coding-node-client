# DescribeCdDeployTrendByApplicationsResponseData

DescribeCdDeployTrendByApplicationsResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | [**Array&lt;CdDeployTrendDetail&gt;**](CdDeployTrendDetail.md) | 各应用发布趋势详情 | [optional] [default to undefined]
**EndDate** | **string** | 结束时间 | [optional] [default to '']
**StartDate** | **string** | 开始时间 | [optional] [default to '']
**Total** | [**CdDeployTrendTotal**](CdDeployTrendTotal.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DescribeCdDeployTrendByApplicationsResponseData } from './api';

const instance: DescribeCdDeployTrendByApplicationsResponseData = {
    Details,
    EndDate,
    StartDate,
    Total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
