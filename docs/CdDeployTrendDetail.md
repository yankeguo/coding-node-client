# CdDeployTrendDetail

CdDeployTrendDetail 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | 应用名称 | [optional] [default to '']
**CdDeployTrend** | [**Array&lt;CdDeployTrend&gt;**](CdDeployTrend.md) | 应用发布趋势统计 | [optional] [default to undefined]
**SuccessCount** | **number** | 成功发布次数 | [optional] [default to undefined]
**TotalCount** | **number** | 发布总次数 | [optional] [default to undefined]

## Example

```typescript
import { CdDeployTrendDetail } from './api';

const instance: CdDeployTrendDetail = {
    Application,
    CdDeployTrend,
    SuccessCount,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
