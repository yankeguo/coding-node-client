# DescribeProjectAnnouncements200ResponseResponse

公共返回体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalCount** | **number** | 公告总数 | [optional] [default to 0]
**PageSize** | **number** | 每页数量 | [optional] [default to 0]
**PageNumber** | **number** | 页数 | [optional] [default to 0]
**List** | [**Array&lt;ProjectAnnouncementProjectAnnouncement&gt;**](ProjectAnnouncementProjectAnnouncement.md) | 公告列表 | [optional] [default to undefined]
**RequestId** | **string** | 请求id | [optional] [default to 'xxxxx']

## Example

```typescript
import { DescribeProjectAnnouncements200ResponseResponse } from './api';

const instance: DescribeProjectAnnouncements200ResponseResponse = {
    TotalCount,
    PageSize,
    PageNumber,
    List,
    RequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
